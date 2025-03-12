export default function Profile(props:any) {
    const {name, email, age} = props;
    const title = <h2>Profile</h2>
    return (
        <div>
            <div>{title}{name}{email}{age}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{age}</div>
        </div>
    );
}