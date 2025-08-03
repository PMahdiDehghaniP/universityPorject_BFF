const path = require("path");

const PROTO_FILES_FOLDER_PATH = path.join(__dirname, "../../proto/");

const GRPC_PACKAGE_DEFENITION_OPTION = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const GRPC_CLIENTS = [
  {
    filePath: path.join(PROTO_FILES_FOLDER_PATH, "class.proto"),
    packageName: "Class",
    serviceName: "Class",
    target: process.env.UNIVERSITY_SERVER_BHN,
  },
  {
    filePath: path.join(PROTO_FILES_FOLDER_PATH, "college.proto"),
    packageName: "College",
    serviceName: "CollegeService",
    target: process.env.UNIVERSITY_SERVER_BHN,
  },
  {
    filePath: path.join(PROTO_FILES_FOLDER_PATH, "enrollment.proto"),
    packageName: "Enrollment",
    serviceName: "EnrollmentService",
    target: process.env.UNIVERSITY_SERVER_BHN,
  },
  {
    filePath: path.join(PROTO_FILES_FOLDER_PATH, "lesson.proto"),
    packageName: "Lesson",
    serviceName: "LessonService",
    target: process.env.UNIVERSITY_SERVER_BHN,
  },
  {
    filePath: path.join(PROTO_FILES_FOLDER_PATH, "student.proto"),
    packageName: "Student",
    serviceName: "Student",
    target: process.env.UNIVERSITY_SERVER_BHN,
  },
  {
    filePath: path.join(PROTO_FILES_FOLDER_PATH, "teacher.proto"),
    packageName: "Teacher",
    serviceName: "TeacherService",
    target: process.env.UNIVERSITY_SERVER_BHN,
  },
  {
    filePath: path.join(PROTO_FILES_FOLDER_PATH, "term.proto"),
    packageName: "Term",
    serviceName: "TermService",
    target: process.env.UNIVERSITY_SERVER_BHN,
  },
];

module.exports = {
  GRPC_PACKAGE_DEFENITION_OPTION,
  GRPC_CLIENTS,
};
