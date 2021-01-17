export interface Course {
    courseListResponse: { 
        status: number,
        response: any[]
    },
    courseCategoryResponse: { 
        status: number,
        response: any[]
    },
    coursesListByCategory: { 
        status: number,
        response: any[]
    },
    courseDetailResponse: { 
        status: number,
        response: object
    },
    studentByCourseResponse: { 
        status: number,
        response: object
    },
    registerCourseResponse: { 
        status: number,
        response: object
    },
}