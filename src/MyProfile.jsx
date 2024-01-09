const user = {
    name: "User: Potato!",
    imageUrl: "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageSize: 180
}

export default function MyProfile(){
    return(
        <>
        <h1>{user.name}</h1>
        <img 
        alt="user-profile"
        src={user.imageUrl}
        style={{height: user.imageSize, width: user.imageSize}}
        />
        </>
    );
}