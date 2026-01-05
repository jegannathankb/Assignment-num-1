let role = "admin";

switch (role) {
    case "admin":
        console.log("Access granted: Full access");
        break;

    case "Developer":
        console.log("Access granted: Edit access");
        break;

    case "user":
        console.log("Access granted: View access");
        break;

    default:
        console.log("Access denied: Invalid role");
}
