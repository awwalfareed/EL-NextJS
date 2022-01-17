import { Typography } from "@material-ui/core";
import { Business, CastForEducation, LocationOn } from "@material-ui/icons";

const Introduction = () => {
	return (
		<>
			<Typography
				variant="h5"
				style={{ marginBottom: 20, marginLeft: 20, fontWeight: 900 }}
			>
				Profile Introduction
			</Typography>
			<Typography variant="h6" style={{ fontWeight: 700 }}>
				<Business style={{ marginRight: 10 }} />
				Current Company
			</Typography>
			<Typography style={{ marginLeft: 40 }} variant="h8">
				AwwalTech IT Solution Provider
			</Typography>
			<Typography variant="h6" style={{ fontWeight: 700 }}>
				<CastForEducation style={{ marginRight: 10 }} /> Education
			</Typography>
			<Typography style={{ marginLeft: 40 }} variant="h8">
				Bachelor Degree at the Univeristy of Wales
			</Typography>
			<Typography variant="h6" style={{ fontWeight: 700 }}>
				<LocationOn style={{ marginRight: 10 }} /> Location
			</Typography>
			<Typography style={{ marginLeft: 40 }} variant="h8">
				Uzbekistan
			</Typography>
		</>
	);
};

export default Introduction;
