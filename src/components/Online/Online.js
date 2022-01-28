import { withStyles, Avatar } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import { StyledBadge } from "./OnlineStyles.js";

const Online = ({ user }) => {
	return (
		<div>
			<StyledBadge
				overlap="circular"
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				variant="dot"
			>
				<Avatar alt="" src={user.profilePicture} style={{ margin: 5 }} />
			</StyledBadge>
			<span> {user.username}</span>
		</div>
	);
};

export default Online;
