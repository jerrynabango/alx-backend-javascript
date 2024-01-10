interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    readonly yearsOfExperience?: number;
    readonly location: string;
    [propName: string]: any;
}

const teacher: Teacher = {
    firstName: "Mwalimu",
    lastName: "Kimani",
    fullTimeEmployee: true,
    location: "Nairobi",
    contract: true
};
