import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="container-fluid">
                <Form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <Button className="btn" type="submit">Go</Button>
                </Form>
            </div>
            <ul>
                <li><a href="/">Category 1</a></li>
                <li><a href="/">Category 2</a></li>
                <li><a href="/">Category 3</a></li>
            </ul>
        </div>
    );
}
 
export default Sidebar;