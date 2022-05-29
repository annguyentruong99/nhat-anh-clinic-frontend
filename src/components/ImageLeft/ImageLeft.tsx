import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

interface Props {
	children: React.ReactNode;
	imageUrl: string;
}

const ImageLeft: React.FC<Props> = ({ children, imageUrl }) => (
	<Box sx={{ backgroundColor: (theme) => theme.palette.primary.light }}>
		<Container
			sx={{
				backgroundImage: {
					xs: "url(https://storage.googleapis.com/nhat-anh-media/abstract_2_ebd3522e0e/abstract_2_ebd3522e0e.png)",
					lg: "none",
					xl: "none",
				},
				backgroundRepeat: "no-repeat",
				backgroundPosition: "bottom right",
				backgroundSize: "104px 104px",
			}}>
			<Grid container>
				<Grid
					item
					xs={12}
					md={12}
					lg={6}
					sx={{
						padding: "107px 0 67px 0",
						backgroundImage: {
							lg: "url(https://storage.googleapis.com/nhat-anh-media/abstract_2_ebd3522e0e/abstract_2_ebd3522e0e.png)",
						},
						backgroundSize: "209px 209px",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "bottom right",
					}}>
					{children}
				</Grid>
				<Grid item xs={0} md={0} lg={6}>
					<Box
						sx={{
							height: "100%",
							backgroundImage:
								process.env.NODE_ENV === "production"
									? `url(${imageUrl})`
									: `url(http://localhost:1337${imageUrl})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
					/>
				</Grid>
			</Grid>
		</Container>
	</Box>
);

export default ImageLeft;
