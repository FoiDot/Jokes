import './_index.scss';
import { Link } from 'react-router-dom';

// Custom components
import { Table, Thead, Tbody, Th, Td, Tr } from 'components/Atoms/Table';
import Span from 'components/Atoms/ViewLabel';
import { toDate, toEmail } from 'utils/formating';

type Joke = {
  id: number;
  Title: string;
  Body: string;
  Author: string;
  Views: number;
  CreatedAt: number;
};

type Props = {
  data: [Joke];
};

const ListBody = (props: Props) => {
  const { data: jokes } = props;

  const getViewColor = (views: number) => {
    if (views <= 25) return 'tomato';
    else if (views <= 50) return 'orange';
    else if (views <= 75) return 'yellow';
    else if (views <= 100) return 'green';
    return 'white';
  };

  return (
    <div className='ListBody-root'>
      <Table>
        <Thead>
          <Tr>
            <Th>
              <span>Title</span>
            </Th>
            <Th border>
              <span>Author</span>
            </Th>
            <Th border>
              <span>Created Date</span>
            </Th>
            <Th border>
              <span>Views</span>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {jokes.map((joke: Joke) => {
            const { id, Title, Author, CreatedAt, Views } = joke;

            return (
              <Tr key={id}>
                <Td>
                  <Link to={`/edit/${id}`} className='ListBody-link'>
                    <span>{Title}</span>
                  </Link>
                </Td>
                <Td border>
                  <span>{toEmail(Author)}</span>
                </Td>
                <Td border>
                  <span>{toDate(CreatedAt)}</span>
                </Td>
                <Td border>
                  <Span color={getViewColor(Views)} text={Views} />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};

export default ListBody;
