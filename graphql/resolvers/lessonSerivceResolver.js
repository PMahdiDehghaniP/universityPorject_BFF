const { promisify } = require("util");
const { getGrpcClient } = require("../../config/grpc/clientProvider");

const addNewLesson = async (_, { addNewLessonInput }) => {
  try {
    const lessonClient = getGrpcClient("Lesson", "LessonService");
    const addNewLessonGrpc = promisify(lessonClient.AddNewLesson).bind(
      lessonClient
    );
    const grpcInput = {
      Name: addNewLessonInput?.name,
      Number_of_units: addNewLessonInput?.numberOfUnits,
      College_id: addNewLessonInput?.collegeId,
    };
    const response = await addNewLessonGrpc(grpcInput);
    console.log(response);
    return {
      lessonId: response.Lesson_id,
      message: response.Message,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  Mutation: {
    addNewLesson,
  },
};
