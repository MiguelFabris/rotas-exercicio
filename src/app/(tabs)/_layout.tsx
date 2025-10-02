import { Tabs } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';

export default function TabsLayout() {
    return(
        <Tabs  screenOptions={{ headerShown: false, tabBarLabelPosition: 'beside-icon', tabBarStyle:{flexDirection: 'row'} }}>
        <Tabs.Screen name="index" options={{ tabBarLabel: 'Produtos', tabBarIcon: ({color, size}) => <MaterialIcons name='list' color={color} size={size}/> }} />
        <Tabs.Screen name="carrinho" options={{ tabBarLabel: 'Pedidos', tabBarIcon: ({color, size}) => <MaterialIcons name='shopping-bag' color={color} size={size}/> }} />
        <Tabs.Screen name="pagamento" options={{ tabBarButton: () => null, tabBarItemStyle: {flex: 0}}} />
        </Tabs>
    )
}