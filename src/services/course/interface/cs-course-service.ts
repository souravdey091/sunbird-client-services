import {Observable} from 'rxjs';
import {Course} from '../../../models/course';
import {CsCourseServiceConfig} from '../../../index';

export interface GetUserEnrolledCoursesRequest {
    userId: string;
    filters?: {
        board?: string[];
        medium?: string[];
        gradeLevel?: string[];
        subject?: string[];
    };
}

export interface CertificateUrlRequest {
    pdfUrl: string;
}

export interface CertificateUrlResponse {
    signedUrl: string;
}

export interface CsCourseService {
    getUserEnrolledCourses(request: GetUserEnrolledCoursesRequest, additionalParams?: { [key: string]: string }, config?: CsCourseServiceConfig): Observable<Course[]>;

    getSignedCourseCertificate(request: CertificateUrlRequest, config?: CsCourseServiceConfig): Observable<CertificateUrlResponse>;
}
