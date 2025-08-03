# Employee Data

## Learning Competencies

1. Students understands about WEB API
2. Students can apply REST API Architecture
3. Students can apply MVC concept in WEB API
4. Students understands how to use Postman
5. Students able to make API Documentation

## Summary

Employee HR Management adalah sebuah aplikasi mengenai data karyawan, posisi pekerjaan, dan nama perusahaan. Sehingga ada 3 bagian utama: `Employee`, `Job`, `Employer`. Buatlah aplikasi tersebut dengan menggunakan **Express.js** dan **Node.js** agar menjadi sebuah API.

## Tasks

<blockquote>
Untuk mengerjakan lebih baik buat dari awal dan jangan kopi paste ya
</blockquote>

### Task 1 - Table

Buatlah 3 table: `Employee`, `Job`, `Employer` dengan ketentuan berikut:

- Attributes dalam table `Employee` :

  | key  | keterangan                  |
  | ---- | --------------------------- |
  | id   | primary key, akan increment |
  | name | string                      |
  | job  | string                      |
  | age  | number                      |
  | city | string                      |

- Attributes dalam table `Job` :

  | key        | keterangan                  |
  | ---------- | --------------------------- |
  | id         | primary key, akan increment |
  | name       | string                      |
  | category   | string                      |
  | max_salary | number                      |
  | min_salary | number                      |

- Attributes dalam table `Employer` :

  | key            | keterangan                  |
  | -------------- | --------------------------- |
  | id             | primary key, akan increment |
  | name           | string                      |
  | type           | string                      |
  | total_employee | number                      |
  | city           | string                      |

### Task 2 - ERD - Skip this one for a moment goes to Task 3 instead

Attributes dalam table di atas, belum memiliki _Foreign Key_, buatlah ERD dengan relasi berikut:

1. `Employer` memiliki banyak `Employee`
2. `Job` memiliki banyak `Employee`

Design ERD dalam DB Diagram, lalu save dan masukkan ke dalam folder _docs_

### Task 3

Buatlah _endpoints_ dalam folder **Routes** seperti berikut:

| Method | Endpoints             | Keterangan                       |
| ------ | --------------------- | -------------------------------- |
| GET    | /                     | berisi home page                 |
| GET    | /employees            | berisi data karyawan             |
| GET    | /jobs                 | berisi data pekerjaan            |
| GET    | /employers            | berisi data pekerjaan            |
| POST   | /employees/create     | berfungsi untuk menambahkan data |
| POST   | /jobs/create          | berfungsi untuk menambahkan data |
| POST   | /employers/create     | berfungsi untuk menambahkan data |
| GET    | /employees/delete/:id | menghapus dari id                |
| GET    | /jobs/delete/:id      | menghapus dari id                |
| GET    | /employers/delete/:id | menghapus dari id                |
| POST   | /employees/update/:id | berfungsi untuk menambahkan data |
| POST   | /jobs/update/:id      | berfungsi untuk menambahkan data |
| POST   | /employers/update/:id | berfungsi untuk menambahkan data |s

---

## NOTE

A. Gunakan postman untuk test
B. Perhatikan penamaan variable, identation, dsb
