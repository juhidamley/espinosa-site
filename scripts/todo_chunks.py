#!/usr/bin/env python3
"""Print object chunks from a text file that contain TODO (case-insensitive).

A chunk is defined as one brace-balanced object block that starts on a line with
only `{` and ends when the matching closing brace is reached (for example `},`).
"""

from __future__ import annotations

import argparse
from pathlib import Path


def brace_delta_outside_strings(line: str) -> int:
    """Return net `{` minus `}` count while ignoring quoted string content."""
    delta = 0
    in_single = False
    in_double = False
    escape = False

    for ch in line:
        if escape:
            escape = False
            continue

        if ch == "\\":
            escape = True
            continue

        if ch == "'" and not in_double:
            in_single = not in_single
            continue

        if ch == '"' and not in_single:
            in_double = not in_double
            continue

        if not in_single and not in_double:
            if ch == "{":
                delta += 1
            elif ch == "}":
                delta -= 1

    return delta


def split_into_object_chunks(text: str) -> list[tuple[int, int, str]]:
    """Return (start_line, end_line, chunk_text) for each top-level object block."""
    lines = text.splitlines()
    chunks: list[tuple[int, int, str]] = []

    buffer: list[str] = []
    start_line = 0
    brace_depth = 0
    capturing = False

    for line_no, line in enumerate(lines, start=1):
        stripped = line.strip()

        # Treat only standalone opening braces as chunk starts.
        if not capturing and stripped == "{":
            capturing = True
            start_line = line_no
            buffer = [line]
            brace_depth = brace_delta_outside_strings(line)

            if brace_depth == 0:
                chunks.append((start_line, line_no, "\n".join(buffer)))
                buffer = []
                start_line = 0
                capturing = False

            continue

        if not capturing:
            continue

        buffer.append(line)
        brace_depth += brace_delta_outside_strings(line)

        if brace_depth == 0:
            chunks.append((start_line, line_no, "\n".join(buffer)))
            buffer = []
            start_line = 0
            capturing = False

    # If braces are unbalanced, keep the trailing partial chunk to aid debugging.
    if capturing and buffer:
        chunks.append((start_line, len(lines), "\n".join(buffer)))

    return chunks


def find_todo_chunks(path: Path) -> list[tuple[int, int, str]]:
    text = path.read_text(encoding="utf-8")
    return [chunk for chunk in split_into_object_chunks(text) if "todo" in chunk[2].lower()]


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Write object chunks containing TODO to a text file."
    )
    parser.add_argument(
        "file",
        nargs="?",
        default="src/assets/list_txt/publications.txt",
        help="Path to the input file (default: src/assets/list_txt/publications.txt)",
    )
    parser.add_argument(
        "-o",
        "--output",
        default="todo_chunks_output.txt",
        help="Path to output report text file (default: todo_chunks_output.txt)",
    )
    args = parser.parse_args()

    path = Path(args.file)
    if not path.exists():
        print(f"Error: file not found: {path}")
        return 1

    todo_chunks = find_todo_chunks(path)

    if not todo_chunks:
        output_path = Path(args.output)
        output_path.write_text("No chunks containing TODO were found.\n", encoding="utf-8")
        print(f"No TODO chunks found. Wrote report: {output_path}")
        return 0

    output_lines: list[str] = []
    for idx, (start, end, chunk_text) in enumerate(todo_chunks, start=1):
        output_lines.append(f"--- Chunk {idx} (lines {start}-{end}) ---")
        output_lines.append(chunk_text)
        output_lines.append("")

    output_path = Path(args.output)
    output_path.write_text("\n".join(output_lines).rstrip() + "\n", encoding="utf-8")
    print(f"Wrote {len(todo_chunks)} TODO chunk(s) to {output_path}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
