import React from 'react';
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
} from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'jgoncalves8080'}
            name={'José Gonçalves'}
            avatarUrl={undefined}
            followers={92}
            following={12}
            company={'DLine-Code'}
            location={'Luanda, Angola'}
            email={'goncalves2541@gmail.com'}
            blog={'linkedin/in/jgoncalves8080'}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Random repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map((number) => (
                <RepoCard
                  key={number}
                  username={'jgoncalves8080'}
                  reponame={'api-gobarber'}
                  description={'Lorem ipsum sit dolor amet'}
                  language={number % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={8}
                  forks={2}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
