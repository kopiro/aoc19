import os

dir_path = os.path.dirname(os.path.realpath(__file__))


def puzzle_1(lines):
    return False


def puzzle_2(lines):
    return False


if __name__ == "__main__":
    with open(dir_path + "/input.txt", "r") as f:
        lines = [line.strip() for line in f.readlines()]
    print("Puzzle 1:", puzzle_1(lines))
    # print("Puzzle 2:", puzzle_2(lines))
