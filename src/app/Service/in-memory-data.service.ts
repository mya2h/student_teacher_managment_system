import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, STATUS, ResponseOptions } from 'angular-in-memory-web-api';
export interface valid {
  role: string
  token: string
}
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {


  createDb() {
    const student = [
      { id: 1, name: 'kal', email: 'kal@gmail.com', contact: '0000000000', grade: '77' },
      { id: 2, name: 'melkam', email: 'melkam@gmail.com', contact: '1111111111', grade: '86' },
      { id: 3, name: 'hena', email: 'hena@live.in', contact: '2222222222', grade: '100' },
      { id: 4, name: 'abel', email: 'abel@gmail.com', contact: '6666666666', grade: '43' },
      { id: 5, name: 'dani', email: 'dani@live.in', contact: '9909999999', grade: '90' }

    ]
    const user = [
      { id: 1, first_name: 'kal', last_name: "gtr", email: 'kal@gmail.com', phone_number: '0000000000', password: '77', role: "student" },
      { id: 2, first_name: 'melkam', last_name: "gtr", email: 'melkam@gmail.com', phone_number: '1111111111', password: '86', role: "student" },
      { id: 3, first_name: 'hena', last_name: "gtr", email: 'hena@live.in', phone_number: '2222222222', password: '100', role: "student" },
      { id: 4, first_name: 'abel', last_name: "gtr", email: 'abel@gmail.com', phone_number: '6666666666', password: '43', role: "teacher" },
      { id: 5, first_name: 'dani', last_name: "gtr", email: 'dani@live.in', phone_number: '9909999999', password: '90', role: "teacher" }

    ]
    const login = [
      {
        email: "student",
        password: "12345"
      },
      {
        email: "teacher",
        password: "12345"
      }
    ]
    const studentGrade = [
      { id: 1, subject: 'maths', email: 'kal@gmail.com', instructor: 'kasjd', grade: '77' },
      { id: 2, subject: 'physics', email: 'melkam@gmail.com', instructor: 'sdhf', grade: '86' },
      { id: 3, subject: 'chemistry', email: 'hena@live.in', instructor: 'sjdf', grade: '100' },
      { id: 4, subject: 'bio', email: 'abel@gmail.com', instructor: 'sdkjf', grade: '43' },
      { id: 5, subject: 'angular', email: 'dani@live.in', instructor: 'sdgh', grade: '90' }

    ]
    return { student, login, user, studentGrade }
  }

  post(reqInfo: RequestInfo) {
    if (reqInfo.collectionName === 'login')
      return this.authenticate(reqInfo)
    return undefined
  }
  private postRequest() {

  }
  private authenticate(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const { headers, url, req } = reqInfo
      const { email, password } = req['body']
      if (email === 'student' && password === '12345')
        return {
          status: 200,
          headers,
          url,
          body: {
            role: 'student',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
          }
        }
      else if (email === 'teacher' && password === '12345')
        return {
          status: 200,
          headers,
          url,
          body: {
            role: 'teacher',
            token: 'eyJhbGciOiJIUzIgsfghfgadukga1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
          }
        }
      return {
        status: 401,
        headers,
        url,
        body: {}
      }
    })
  }
}

