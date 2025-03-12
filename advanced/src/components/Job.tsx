export default function Job(props:any) {
    const {salary, position, company} = props;
    return (
        <div>
            <div><h2>Job</h2></div>
            <div>{salary >= 100000 ? <h4 style={{color: "red"}}>High Salary</h4> : <h4 style={{color: "blue"}}> Low Salary</h4>}</div>
            <div>{position}</div>
            <div>{company}</div>
        </div>
    );
}