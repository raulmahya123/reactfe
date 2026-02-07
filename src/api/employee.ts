import { auth } from "../store/auth";

const headers = () => ({
  Authorization: `Bearer ${auth.getToken()}`,
});

export async function getEmployees() {
  return fetch("http://localhost:3000/api/employees", {
    headers: headers(),
  }).then((r) => r.json());
}

export async function createEmployee(data: any) {
  return fetch("http://localhost:3000/api/employees", {
    method: "POST",
    headers: {
      ...headers(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((r) => r.json());
}

export async function updateEmployee(id: string, data: any) {
  return fetch(`http://localhost:3000/api/employees/${id}`, {
    method: "PUT",
    headers: {
      ...headers(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((r) => r.json());
}

export async function deleteEmployee(id: string) {
  return fetch(`http://localhost:3000/api/employees/${id}`, {
    method: "DELETE",
    headers: headers(),
  }).then((r) => r.json());
}

export async function uploadExcel(file: File) {
  const fd = new FormData();
  fd.append("file", file);

  return fetch("http://localhost:3000/api/employees/upload-excel", {
    method: "POST",
    headers: headers(),
    body: fd,
  }).then((r) => r.json());
}
