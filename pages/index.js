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
        <Text>Hi there! My name is Prapat Polchan and I am a full-stack developer and Web3 (EVM, Solidity) developer. I have experience with hosting setup and serverless technologies, and I am passionate about creating high-quality web and blockchain applications. I enjoy learning about new technologies and finding creative solutions to complex problems. I am excited to share my knowledge and skills with others and to continue growing as a developer.</Text>
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
      <MockItem years="2016.08" badges="0" text="I built and designed the architecture for a web app service for Dealer Isuzu's customer service team. The web app uses multiple technologies, and I worked with the team to design the service and choose the tools to build the app." > </MockItem>

      </Grid>
      <Grid xs={6}>
        <MockItem years="2017.01" badges="1" text="I built and designed an application using Ionic2 for tracking customers and business services for car maintenance and delivery. However, Ionic2 is no longer suitable for this product, so I need to find a different technology to use instead. I will continue to research and evaluate my options to find the best solution for this product."></MockItem>
      </Grid>
      <Grid xs={6}>
        <MockItem years="2017.04" badges="2" text="This year, cryptocurrencies are gaining popularity, and I am learning about blockchain technology. I have set up a validator node and a masternode, and I am working on the infrastructure to control, update, and monitor the network. I am using various services to track and maintain the network. Overall, I am excited about the potential of cryptocurrencies and blockchain technology, and I am looking forward to continuing to learn and explore these areas in the future."></MockItem>
      </Grid>
      <Grid xs={6}>
      <MockItem years="2018.01" badges="3" text="After learning about blockchain technology, I created a crypto wallet using the Angular2 framework and Web3. The wallet is intended for use by businesses to manage royalty points using ERC20 tokens. It has features to generate seeds and encrypt the wallet for our customers. The wallet can be used to send and receive tokens, and we have also built a dashboard to monitor and control the wallet."></MockItem>
      </Grid>
      <Grid xs={6}>
        <MockItem years="2019.01-2021.09" badges="4" text="
        I started learning and researching new technologies to create an Android and iOS application for a new product. I found that Ionic2 is no longer suitable for my needs, so I decided to use Flutter instead. Flutter is a great tool for building cross-platform applications that perform like native apps.

        I trained my team on Flutter and we used it to design a crypto wallet. We used NodeJS and Express to build the backend service API, which has multiple functions. We also learned about Shamir Secret Sharing, which we used to keep the seed and backup for user in safe.
        
        This is a centralized application, but users need to enter a password to unlock the seed decryption. The wallet can be used to send, receive, and withdraw points to fiat currency, but these functions are only available to employees. We also built several lucky games and lottery games using the business logic in Solidity Smart Contracts on Tomochain.
        
        To filter log data from the smart contract events and store it in external blockchains like MySQL and Firestore, we used Web3 and EtherJS.
        "></MockItem>
      </Grid>
      <Grid xs={6}>
        <MockItem years="2021.09-2022" badges="5" text="This year, I have been learning about new technologies for Web3 tools. I have learned about The Graph, which is a tool for querying data on a blockchain in real-time. I have also learned about IPFS, which is a decentralized file storage system similar to torrents.

In addition, I have learned about oracle services, which provide secure randomness for smart contracts. I am also interested in decentralized finance (DeFi) platforms, such as Uniswap2."></MockItem>
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
