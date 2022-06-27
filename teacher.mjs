let count = 0;

class Teachers {
  map = new Map();
  constructor() {
    this.id = count++;
  }
  add(teacher) {
    this.map.set(this.id, teacher);
    return this.id;
  }
  read(id) {
    console.log(this.map.get(id));
  }
  update(id, teacher) {
    this.map.set(id, teacher);
  }
  remove(id) {
    this.map.delete(teacher.id);
  }
}

const teacher = {
  name: {
    first: "Bakuri",
    last: "Jobava",
  },
  dateOfBirth: "string", // format date
  emails: [
    {
      email: "string",
      primary: "boolean",
    },
  ],
  phones: [
    {
      phone: "string",
      primary: "boolean",
    },
  ],
  sex: "string", // male or female
  subjects: [
    {
      subject: "string", // just name property of subject.
    },
  ],
  description: "string",
};

const teacher2 = {
  name: {
    first: "Ilia",
    last: "Pachulia",
  },
  dateOfBirth: "string", // format date
  emails: [
    {
      email: "string",
      primary: "boolean",
    },
  ],
  phones: [
    {
      phone: "string",
      primary: "boolean",
    },
  ],
  sex: "string", // male or female
  subjects: [
    {
      subject: "string", // just name property of subject.
    },
  ],
  description: "string",
};

const teachers = new Teachers();
const teacherId = teachers.add(teacher);

teachers.read(teacherId);

teachers.update(teacherId, teacher2);
teachers.read(teacherId);

// const teacherId = teachers.add(data);
