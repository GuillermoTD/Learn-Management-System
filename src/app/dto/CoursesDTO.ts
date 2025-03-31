export interface CoursesDTO {
  id: string;
  title: string;
  description: string;
  instructorId: string;
  category: string;
  courseFrontImage: string;
  language: string;
  price: number;
  lessons: LessonDTO[];
  enrolled_Students: number;
  ratings: RatingDTO[];
  creation_Date: string;
}

interface LessonDTO {
  title: string;
  duration: number;
  video_Url: string;
}

export interface RatingDTO {
  userId: string;
  commentary: string;
  rate: number;
}
