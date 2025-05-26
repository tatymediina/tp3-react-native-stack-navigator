import { Tabs } from 'expo-router';

export const AuthLayout = ()=>{
    return (
        <Tabs>
            <Tabs.Screen
            name = "login"
            options={{
               
                headerShown:false}}>
            </Tabs.Screen>
        </Tabs>
    )
}