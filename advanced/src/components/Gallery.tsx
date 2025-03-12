import Profile from "./Profile";
import Job from "./Job";

export default function Gallery() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const guests = [
        {name: "Yu Yu", age: 23},
        {name: "Shawn", age: 20},
        {name: "Ninw", age: 22},
    ]
    return (
        <div>
            <h2>Gallery</h2>
            {/* option + shift + up/down -> add the same line*/}
            <Profile name="Shawn" email="123@gmail.com" age="20"/>
            <Profile name="Yu Yu" email="234@gmail.com" age="23"/>
            <Profile name="Nina" email="345@gmail.com" age="22"/>
            <Job salary="150000" position="SDE" company="Apple"/>
            <Job salary="90000" position="IT" company="Netflix"/>
            <Job salary="100000" position="DS" company="Google"/>

            {numbers.map((value, key)=> {
                return <h6 key={key}>{value}</h6>
            })}

            {guests.map((guest, key)=> {
                return (
                    <div key={key}>
                        {guest.name} is {guest.age} year's old
                    </div>
                );
            })}
        </div>
    )
}