CREATE DATABASE school_management;
USE school_management;

-- Users table: handles login for everyone (Admin, Teacher, Student, Parent)
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('ADMIN', 'TEACHER', 'STUDENT') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE classes (
    class_id INT AUTO_INCREMENT PRIMARY KEY,
    class_name VARCHAR(20) NOT NULL,      -- e.g. '10'
    section VARCHAR(5) NOT NULL,          -- e.g. 'A'
    class_teacher_id INT,                 -- filled in once teachers table exists
    UNIQUE (class_name, section)          -- prevents duplicate "10-A" entries
);

CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE,                   -- links to their login account
    admission_number VARCHAR(20) UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    date_of_birth DATE,
    gender ENUM('Male', 'Female', 'Other'),
    class_id INT,
    parent_name VARCHAR(100),
    parent_phone VARCHAR(15),
    address TEXT,
    admission_date DATE DEFAULT (CURRENT_DATE),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (class_id) REFERENCES classes(class_id)
);

CREATE TABLE teachers (
    teacher_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE,
    employee_id VARCHAR(20) UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    qualification VARCHAR(100),
    department VARCHAR(50),
    phone VARCHAR(15),
    date_joined DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

ALTER TABLE classes
ADD FOREIGN KEY (class_teacher_id) REFERENCES teachers(teacher_id);

CREATE TABLE subjects (
    subject_id INT AUTO_INCREMENT PRIMARY KEY,
    subject_name VARCHAR(50) NOT NULL,
    class_id INT,
    teacher_id INT,
    FOREIGN KEY (class_id) REFERENCES classes(class_id),
    FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id)
);

CREATE TABLE attendance (
    attendance_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    class_id INT NOT NULL,
    attendance_date DATE NOT NULL,
    status ENUM('Present', 'Absent', 'Late') NOT NULL DEFAULT 'Present',
    marked_by INT,                          -- teacher_id who marked it
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (class_id) REFERENCES classes(class_id),
    FOREIGN KEY (marked_by) REFERENCES teachers(teacher_id),
    UNIQUE (student_id, attendance_date)    -- one attendance record per student per day
);

CREATE TABLE exams (
    exam_id INT AUTO_INCREMENT PRIMARY KEY,
    exam_name VARCHAR(50) NOT NULL,         -- e.g. 'Mid Term', 'Final Exam'
    class_id INT,
    exam_date DATE,
    FOREIGN KEY (class_id) REFERENCES classes(class_id)
);

CREATE TABLE marks (
    mark_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    subject_id INT NOT NULL,
    exam_id INT NOT NULL,
    marks_obtained DECIMAL(5,2) NOT NULL,
    max_marks DECIMAL(5,2) NOT NULL DEFAULT 100,
    grade VARCHAR(3),                        -- e.g. 'A+', 'B', can be calculated or entered
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id),
    FOREIGN KEY (exam_id) REFERENCES exams(exam_id),
    UNIQUE (student_id, subject_id, exam_id) -- one mark entry per student, per subject, per exam
);

