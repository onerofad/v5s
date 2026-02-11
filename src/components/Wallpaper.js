import { Button, Grid, GridColumn, Header, HeaderSubheader, Image, Menu, MenuItem, Segment } from "semantic-ui-react";
import photo from '../images/photo.avif'
import owa from '../images/owa.jpg'
import logo from '../images/logo.png'

const colors=["brown"]
const Wallpaper = () => (
    <Segment basic inverted size="huge" style={{padding: "40px 100px"}}>
        <Grid columns={2}>
            <GridColumn width={9}>
                <Menu
                    inverted
                    secondary
                    size="large"
                    
                >
                    <MenuItem link active color="brown">
                        Home
                    </MenuItem>
                     <MenuItem link>
                        About
                    </MenuItem>
                     <MenuItem link>
                        Shop
                    </MenuItem>
                     <MenuItem link>
                        Contact
                    </MenuItem>
                    <MenuItem position="right">
                        <Image src={logo} size="small" />
                    </MenuItem>
                </Menu>

                <Header inverted as="h1" style={{margin: "120px 20px", fontSize: 40}}>
                    VILLA5 STUDIO
                    <HeaderSubheader style={{textAlign: 'justify'}}>THE ACT OF PHOTOGRAPHY</HeaderSubheader>
                </Header>

                <Button color="brown" style={{margin: "0px 20px", width: 180, height: 65, fontSize: 18}}>
                    Explore Studio
                </Button>
            </GridColumn>
            <GridColumn width={7} textAlign="right">
                <Image floated="right" size="massive" inline src={photo} />
            </GridColumn>
        </Grid>
    </Segment>
)
export default Wallpaper