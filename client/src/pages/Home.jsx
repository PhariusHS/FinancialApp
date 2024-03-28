import React from "react";
import { View } from "react-native";
import ListOfBills from "../components/ListOfBills";
import FunctButton from "../components/styledComponents/FunctButton";
import {Link} from 'react-router-native'

function Home() {
  return (
    <View>
      <ListOfBills />
      <Link to="/createSpent">
        <FunctButton>Dis shit</FunctButton>
      </Link>
    </View>
  );
}

export default Home;
