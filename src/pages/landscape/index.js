import { Box, Container, Flex, Text, Image } from '@chakra-ui/react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import IconCard from '../../components/iconCard';
import TaskCard from '../../components/taskCard';
import TitleCard from '../../components/titleCard';

import daohaus from '../../assets/images/daohaus.svg';
import ceramic from '../../assets/images/ceramic.svg';
import brightid from '../../assets/images/brightid.svg';
import unlock from '../../assets/images/unlock.svg';
import multis from '../../assets/images/multis.svg';
import home from '../../assets/images/home.svg';
import bistro from '../../assets/images/bistro.svg';
import dework from '../../assets/images/dework.svg';
import dao from '../../assets/images/dao.svg';
import avatar from '../../assets/images/avatar.png';
import facebook from '../../assets/images/facebook1.svg';
import twitter from '../../assets/images/twitter1.svg';
import instgram from '../../assets/images/instgram1.svg';
import github from '../../assets/images/github1.svg';

const chartData = [
  {
    name: 'Page A',
    uv: 50,
  },
  {
    name: 'Page B',
    uv: 42,
  },
  {
    name: 'Page C',
    uv: 56,
  },
  {
    name: 'Page D',
    uv: 50,
  },
  {
    name: 'Page E',
    uv: 70,
  },
  {
    name: 'Page F',
    uv: 58,
  },
  {
    name: 'Page G',
    uv: 70,
  },
];

const chartData1 = [
  { name: 'ETH', value: 400 },
  { name: 'GC', value: 300 },
  { name: 'DKP', value: 300 },
];

const data = [
  {
    icon: home,
    title: '17,800+',
    text: 'Members',
  },
  {
    icon: home,
    title: '13,100+',
    text: 'Follower',
  },
  {
    icon: home,
    title: '100,90M+',
    text: 'Treasury',
  },
  {
    icon: home,
    title: '1.3',
    text: 'Token Price',
  },
];

const taskData = [
  {
    icon: dework,
    title: 'Task',
    text: 'Tasks in Dework',
    color: 'rgba(255, 152, 211, 0.2)',

    data: [
      {
        title: '13,100',
        text: 'To Do',
      },
      {
        title: '890',
        text: 'In Progress',
      },
      {
        title: '33',
        text: 'In Review',
      },
    ],
  },
  {
    icon: dao,
    title: 'DAO',
    text: 'Governance in DAO',
    color: 'rgba(255, 214, 107, 0.2)',
    data: [
      {
        title: '9,608',
        text: 'Unsponsored',
      },
      {
        title: '128',
        text: 'Voting',
      },
      {
        title: '76',
        text: 'Grace',
      },
    ],
  },
];

const productsData = [
  {
    icon: home,
    title: 'Incubator',
    text: 'Members',
  },
  {
    icon: home,
    title: 'DKP',
    text: 'Follower',
  },
  {
    icon: home,
    title: 'DAOscape',
    text: 'Treasury',
  },
  {
    icon: home,
    title: 'Bistro',
    text: 'Token Price',
  },
];

const guildsData = [
  {
    icon: bistro,
    title: 'dao2',
    text: 'Media',
  },
  {
    icon: bistro,
    title: 'DevilGuild',
    text: 'Developer',
  },
  {
    icon: bistro,
    title: 'Cafeteria',
    text: 'Governance',
  },
  {
    icon: bistro,
    title: 'Matrix',
    text: 'Development',
  },
  {
    icon: bistro,
    title: 'WhaleDAO',
    text: 'Marketing',
  },
];

const portfolioData = [
  {
    icon: daohaus,
    title: 'DAOhause',
    text: 'Infrastructure',
  },
  {
    icon: ceramic,
    title: 'Ceramic',
    text: 'Infrastructure',
  },
  {
    icon: brightid,
    title: 'BrightID',
    text: 'DID',
  },
  {
    icon: unlock,
    title: 'Unlock',
    text: 'Tools',
  },
  {
    icon: multis,
    title: 'Multis',
    text: 'Fund manager',
  },
];

function Landscape() {
  return (
    <Box>
      <Container maxW="container.lg" mt={9} mb="120px" overflow="auto">
        <Flex alignItems="center">
          <Box w="20%">
            <Image src={avatar} width="140px" />
          </Box>
          <Box w="80%">
            <Box fontSize="48px">DAOSquare</Box>
            <Box fontSize="20px" lineHeight="36px">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Box>
            <Flex mt={8}>
              <Image src={facebook} mr={10} />
              <Image src={twitter} mr={10} />
              <Image src={instgram} mr={10} />
              <Image src={github} />
            </Flex>
          </Box>
        </Flex>
      </Container>

      <Flex wrap="wrap" justifyContent="space-between" mb={8}>
        {data.map(d => (
          <Box w="23.5%">
            <IconCard {...d} />
          </Box>
        ))}
      </Flex>

      <Flex wrap="wrap" justifyContent="space-between" mb={16}>
        <Box w="23.5%">
          <TitleCard title="Market">
            <Box px={4} fontSize="24px" fontWeight={900}>
              2,000,000
            </Box>
            <Box w="100%" h="220px">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={400}
                  data={chartData}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fff" stopOpacity={0.9} />
                      <stop offset="90%" stopColor="#FFD66B" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#FFD66B"
                    strokeWidth="3px"
                    filter="drop-shadow(0px 3px 5px rgba(32, 5, 5, 0.1))"
                    fill="url(#colorUv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </TitleCard>
        </Box>
        <Box w="23.5%">
          <TitleCard title="Stake">
            <Box px={4} fontSize="24px" fontWeight={900}>
              590,000
            </Box>
            <Box w="100%" h="220px">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={400}
                  data={chartData}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fff" stopOpacity={0.9} />
                      <stop
                        offset="95%"
                        stopColor="rgba(183, 207, 254, 0.7)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#5B93FF"
                    strokeWidth="3px"
                    filter="drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.1))"
                    fill="url(#color2)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </TitleCard>
        </Box>
        <Box w="23.5%">
          <TitleCard title="Holders">
            <Box w="100%" h="256px">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={60}>
                  <Pie
                    data={chartData1}
                    dataKey="value"
                    cx="50%"
                    cy="40%"
                    innerRadius={60}
                    outerRadius={80}
                  >
                    {chartData1.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          index === 0
                            ? '#AE8FF7'
                            : index === 1
                            ? '#FFD66B'
                            : '#FF96D5'
                        }
                      />
                    ))}
                  </Pie>
                  <Legend
                    iconType="circle"
                    iconSize={10}
                    wrapperStyle={{ bottom: '20px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </TitleCard>
        </Box>
        <Box w="23.5%">
          <TitleCard title="DKP">
            <Box p={4} h="256px">
              <Box fontSize="12px" color="#9d9caf" mt={1}>
                DKP1
              </Box>
              <Box fontSize="24px" fontWeight={900} color="#4C4B63" mb={5}>
                D1,648,023,199
              </Box>
              <Box fontSize="12px" color="#9d9caf">
                DKP2
              </Box>
              <Box fontSize="24px" fontWeight={900} color="#4C4B63" mb={5}>
                623,963
              </Box>
              <Box fontSize="12px" color="#9d9caf">
                DKP3
              </Box>
              <Box fontSize="24px" fontWeight={900} color="#4C4B63">
                3,838
              </Box>
            </Box>
          </TitleCard>
        </Box>
      </Flex>

      <Flex wrap="wrap" justifyContent="space-between" mb={16}>
        {taskData.map(d => (
          <Box w="49%">
            <TaskCard {...d} />
          </Box>
        ))}
      </Flex>

      <Flex wrap="wrap" justifyContent="space-between" mb={16}>
        <Box w="49%">
          <TitleCard title="news"></TitleCard>
        </Box>
        <Box w="49.2%">
          <TitleCard title="December 2, 2021"></TitleCard>
        </Box>
      </Flex>

      <Text as="h3" fontSize="14px" color="#4C4B63" mb={2} mt={10}>
        Products
      </Text>
      <Flex wrap="wrap" justifyContent="space-between">
        {productsData.map(d => (
          <Box w="23.5%" mb={6}>
            <IconCard {...d} />
          </Box>
        ))}
      </Flex>

      <Text as="h3" fontSize="14px" color="#4C4B63" mb={2} mt={10}>
        Guilds
      </Text>
      <Flex wrap="wrap" justifyContent="space-between">
        {guildsData.map(d => (
          <Box w="23.5%" mb={6}>
            <IconCard {...d} />
          </Box>
        ))}
      </Flex>

      <Text as="h3" fontSize="14px" color="#4C4B63" mb={2} mt={10}>
        Portfolio
      </Text>
      <Flex wrap="wrap" justifyContent="space-between">
        {portfolioData.map(d => (
          <Box w="23.5%" mb={6}>
            <IconCard {...d} />
          </Box>
        ))}
      </Flex>

      <Box h={20}></Box>
    </Box>
  );
}

export default Landscape;
