interface Teacher {
    firstName: string;
    lastName: string;
    location: string;
    fullTimeEmployee: boolean;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: "Onyango",
    lastName: "Brian",
    location: "Nairobi",
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);
