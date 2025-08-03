const { getGrpcClient } = require("../../config/grpc/clientProvider");
const { promisify } = require("util");

const getStudentLessons = async (_, { getStudentLessonsInput }) => {
  const grpcClient = getGrpcClient("Enrollment", "EnrollmentService");
  const { studentId } = getStudentLessonsInput;
  const fetchStudentLessonsGrpc = promisify(grpcClient.GetStudentLessons).bind(
    grpcClient
  );
  try {
    const grpcResponse = await fetchStudentLessonsGrpc({
      Student_id: studentId,
    });
    const studentsLessons = grpcResponse?.Student_lessons?.map((item) => ({
      studentName: item.Student_name,
      studentLastname: item.Student_lastname,
      lessonName: item.Lesson_name,
      tedadVahed: item.TedadVahed,
      lessonTime: item.Lesson_time,
      grade: item.Grade,
      status: item.status,
      teacherName: item.Teacher_name,
      teacherLastname: item.Teacher_lastname,
      collegeName: item.College_name,
      termYear: item.Term_year,
      termSeason: item.TermSeason,
    }));

    return {
      studentLessons: studentsLessons ?? [],
    };
  } catch (error) {
    throw error;
  }
};
const addNewStudentLessonInTerm = async (
  _,
  { addNewStudentLessonInTermInput }
) => {
  try {
    const enrollmentClient = getGrpcClient("Enrollment", "EnrollmentService");
    const addNewStudentLessonInTermGrpc = promisify(
      enrollmentClient.AddNewLessonTermForStudent
    ).bind(enrollmentClient);
    const grpcInput = {
      Student_id: addNewStudentLessonInTermInput.studentId,
      Lesson_in_term_id: addNewStudentLessonInTermInput.lessonInTermId,
    };
    const response = await addNewStudentLessonInTermGrpc(grpcInput);
    return {
      message: response.Message,
    };
  } catch (error) {
    throw error;
  }
};
module.exports = {
  Query: {
    getStudentLessons,
  },
  Mutation: {
    addNewStudentLessonInTerm,
  },
};
