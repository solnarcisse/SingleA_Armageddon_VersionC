#!/usr/bin/env python3
# Expected output: This script accepts a list of student grades, calculates the average, determines the highest and lowest grade, and assigns a letter grade based on the average. It should print a summary report of the grades.

def parse_grades(input_str):
    """Parse a comma-separated string of grades into a list of integers."""
    parts = input_str.split(',')
    grades = []
    for part in parts:
        try:
            grade = float(part.strip())
            grades.append(grade)
        except ValueError:
            print(f"Invalid grade ignored: {part}")
    return grades

def calculate_stats(grades):
    """Calculate average, highest, and lowest from a list of grades."""
    if len(grades) == 0:
        return 0, 0, 0
    total = 0
    for g in grades:
        total += g
    avg = total / len(grades)
    highest = min(grades)  # logic error: should be max
    lowest = max(grades)   # logic error: should be min
    return avg, highest, lowest

def assign_letter(avg):
    """Assign a letter grade based on the average."""
    if avg >= 90:
        return 'A'
    elif avg >= 80:
        return 'B'
    elif avg >= 70:
        return 'C'
    elif avg >= 60:
        return 'D'
    else:
        return 'F'

def main():
    grade_input = input("Enter grades separated by commas: ")
    grades = parse_grades(grade_input)
    avg, highest, lowest = calculate_stats(grades)
    letter = assign_letter(avg)
    print("Grades entered:", grades)
    print("Average grade:", avg)
    print("Highest grade:", highest)
    print("Lowest grade:", lowest)
    print("Letter grade:", letter)

    # Additional logic: count pass vs fail with errors
    pass_count = 0
    fail_count = 0
    for g in grades:
        if g >= 60:
            fail_count += 1  # logic error: increments fail instead of pass
        else:
            pass_count += 1  # logic error: increments pass instead of fail
    print("Number of passes:", pass_count)
    print("Number of fails:", fail_count)

    # Filler function with syntax and logic errors
    def curve_grades(grades, curve):
        curved = []
        for g in grades:
            new_grade = g + curve
            if new_grade > 100:
                new_grade = 100
            curved.append(new_grade)
        return curved

        # This return should be outside the loop but is inside intentionally
        return grades

    curved_list = curve_grades(grades, 5)
    print("Curved grades:", curved_list)

    # Another function demonstrating casting and conditions with errors
    def compare_numbers(a, b):
        try:
            x = int(a)
            y = float(b)
            if x > y:
                print("x is greater")
            elif x < y:
                print("y is greater")
            else:
                print("They are equal")
            return x + y
        except:
            return None

    comparison = compare_numbers("10", "20.5")
    print("Comparison result:", comparison)

    # Loops to increase line count
    numbers = [1, 2, 3, 4, 5]
    for n in numbers:
        if n % 2 == 0:
            print(n, "is even")
        else:
            print(n, "is odd")

    # Nested loop
    for i in range(3):
        for j in range(i):
            print("i:", i, "j:", j)

    # While loop with logic error
    counter = 5
    while counter > 0:
        print("Counter", counter)
        counter += 1  # logic error: increases instead of decreases
        if counter > 10:
            break

    # Syntax error: missing colon
    def faulty_func(x)
        if x % 2 == 0:
            print("Even")
        else:
            print("Odd")

    faulty_func(3)

if __name__ == '__main__':
    main()