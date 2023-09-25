export type TeachingBelief = {
    title: string;
    description: string;
}

export type SchoolCourses = {
    school: string;
    courses: Course[];
}

export type Course = {
    title: string;
    sections: string[];
    feedbacks?: string[];
}