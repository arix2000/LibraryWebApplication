import {Table} from "react-bootstrap";
import books from '../../models/books.json';

export default function BookList() {
    
    return(
        <Table responsive striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Cover</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Published</th>
                    <th>Average rating</th>
                </tr>
            </thead>
            <tbody>
                {books.map((item) => (
                <tr key={item.isbn13}>
                    <td><img src={item.thumbnail} alt={item.title+" Cover"}/></td>
                    <td>{item.title}</td>
                    <td>{item.authors}</td>
                    <td>{item.published_year}</td>
                    <td>{item.average_rating}</td>
                </tr>
            ))}
            </tbody>
        </Table>
   

)};