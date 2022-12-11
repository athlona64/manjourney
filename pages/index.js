import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@nextui-org/react';
import { Container, Row, Text, User, Spacer, Card, Grid, Badge, Link} from '@nextui-org/react';

export default function Home() {
  const badgeEx1 = ['Codeignitor', 'Bootstrap', 'Twilio', 'Nexmo', 'MySQL', 'MongoDB', 'AWS Lambda', 'Line Notifications', 'Elasticsearch', 'Logstash', 'AWS EC2', 'RESTfulAPI', 'Nginx', 'SSL'];
  const badgeEx2 = ['Ionic2', 'Google Maps API', 'Firebase', 'MySQL', 'NodeJS', 'Express', 'RESTfulAPI'];
  const badgeEx3 = ['AWS EC2', 'Linode', 'Digital Ocean', 'Grafana', 'Docker', 'PM2', 'Nginx', 'Tomochain', 'Oxen', 'Bash Script', 'Line Notify']
  const badgeEx4 = ['Angular2', 'Web3', 'Web3JS', 'RPC', 'Ethereum', 'Tomochain', 'EVM', 'ERC20','Solidity', 'Remix', 'MySQL', 'Firebase', 'Firebase Authentication', 'Elasticsearch', 'Logstash'];
  const badgeEx5 = ['Flutter', 'Dart', 'Docker', 'Git', 'Firebase', 'Firestore', 'Firebase Authentication', 'EVM', 'Solidity', 'Remix', 'HardHat', 'Web3', 'EtherJS', 'Google SpreadSheet', 'AWS EC2', 'AWS Elasticsearch', 'MySQL', 'MongoDB', 'ERC20', 'ERC1155', 'RESTfulAPI', 'RPC', 'Shamir Secret Sharing', 'BIP39', 'BIP44', 'NodeJS', 'Express', 'IPFS'];
  const badgeEx6 = ['Web3', 'The Graph', 'Oracle', 'VRF', 'NextJS', 'IPFS'];
  const arrayBadge = [badgeEx1, badgeEx2, badgeEx3, badgeEx4, badgeEx5, badgeEx6];
  
  const randomColor = ['primary', 'warning', 'error', 'success', 'secondary'];
 
  const MockItem = ({ text, badges, years}) => {
    return (
      <Card css={{ h: "$30", $$cardColor: '$colors$info' }}>
        <Card.Body>
        <Text
        h6
        size={20}
        css={{
          textGradient: "45deg, $yellow800 -10%, $green400 100%",
        }}
        weight="bold"
        >
      {years}
      </Text>
          <Text h6 size={15} color="black" css={{ m: 0 }}>
            {text}
            <Spacer/>
            {arrayBadge[parseInt(badges)]?.map((name) => <Badge key={name} color={randomColor[Math.floor(Math.random() * 5)]}>{name}</Badge> )}
          </Text>
      
        </Card.Body>
      </Card>
    );
  };
  return (
    <Container>
      <Spacer />
      <Spacer />
      <Row justify="center" align="center">
      <Text
        h6
        size={48}
        css={{
          textGradient: "45deg, $red800 -30%, $green600 80%",
        }}
        weight="bold"
        >
      Hello, This is ManZer Journey
      </Text>
      </Row>
      <Row justify='center' align='center'>
      <Spacer />
      <User
        src="https://gateway.pinata.cloud/ipfs/QmaQVnSvvi9T1Wa4HAEk3LCATFBFyKMWU6ZB89mf6hxV6B"
        name=""
        size="xl"
      />
    <Card isHoverable variant="bordered" css={{ mw: "400px" }}>
      <Card.Body>
        <Text>I'm Prapat Polchan, Fullstack developer and Web3 (EVM, Solidity) developer include Hosting setup and Serverless</Text>
        <Spacer/>
        English Level
        <Text>
          Read Intermediate (document tech),
          Write Beginner,
          Listen Beginne
        </Text>
        
      </Card.Body>
    </Card>      
      </Row>
      <Row>
      <Text
        h6
        size={36}
        css={{
          textGradient: "45deg, $blue800 -30%, $pink600 80%",
          marginLeft: "0.5em"
        }}
        weight="bold"
        >
        Work Experience
      </Text>
      </Row>
      <Grid.Container gap={2} justify="center">
      <Grid xs={6}>
      <MockItem years="2016.08" badges="0" text="Built and design architecture web app service and help customer service in Prachakij motorsales(dealer Isuzu) the web app use multi technology i meet the team and design service and choose tool for built web app all stack (2016) Prachakij" > </MockItem>

      </Grid>
      <Grid xs={6}>
        <MockItem years="2017.01" badges="1" text="Built and design application with Ionic2 the service use for tracking customer and bussiness service for delivery maintenance car but Ionic2 won't work in longer for tihs product"></MockItem>
      </Grid>
      <Grid xs={6}>
        <MockItem years="2017.04" badges="2" text="This year cryptocurrency is coming and i learning about Blockchain and create Validator node, Masternode and set up infrastructure for control update and monitor use many service for traking and maintenance"></MockItem>
      </Grid>
      <Grid xs={6}>
      <MockItem years="2018.01" badges="3" text="After learning about Blockchain i create crypto wallet with Angular2 Framework and Web3 for bussiness for royalty point use ERC20 to issues token and generate seed and encrypt for our customer wallet can send, recieve and built dashboad monitor and control"></MockItem>
      </Grid>
      <Grid xs={6}>
        <MockItem years="2019.01-2021.09" badges="4" text="I start learning and research new technology for new product i must create Androind and iOS application but Ionic2 is not working in longer, i found Flutter is the best for build cross platform performance like native i use flutter and training team in fist time i design crypto wallet and i use NodeJS Express build backend service API multiple function and learning about Sharmir Secret Sharming for keep seed and backup for user in safe this is centralized application but in usually user will be fill password to unlock the seed decryption this wallet can send, recieve, withdraw point to fiat currency but this function only for employee and many service lucky game, lottery game built the bussiness logic in Solidity Smart Contract on Tomochain and i must use Web3 and EtherJS filter log data from smart contract event to store in external blockchain like MySQL, Firestore"></MockItem>
      </Grid>
      <Grid xs={6}>
        <MockItem years="2021.09-2022" badges="5" text="In this year i learning about new technology for Web3 tools i learn The Graph for query data on chain in realtime and i learn IPFS for keep file on decentralized like torrent and i learn oracle service for randomness secure on smart contract and i learn about DeFi Platform like Uniswap2"></MockItem>
      </Grid>
    </Grid.Container>


    <Row>
    <Grid.Container gap={1} justify="center">
      <Card isHoverable variant="bordered" css={{ mw: "400px" }}>
        <Card.Body>
        <Text
          h6
          size={24}
          css={{
            textGradient: "45deg, $pink800 -30%, $green600 80%",
          }}
          weight="bold"
          >My Contact </Text>
     
          <Link
          color="primary"
          target="_blank"
          href="https://twitter.com/ManZerCrypto"
        >
          Visit on Twitter
          
        </Link>
        <Link
          color="primary"
          target="_blank"
          href="https://github.com/athlona64"
        >
          Visit on GitHub
          
        </Link>
        
        <Text
        h6
        size={18}
        css={{
          textGradient: "45deg, $blue800 -30%, $pink600 80%",
        }}
        weight="bold"
        >
      Email: prapatp.polchan3@gmail.com
      </Text>
        </Card.Body>
      </Card>   
    </Grid.Container>
    </Row>
    </Container>
  )
}
