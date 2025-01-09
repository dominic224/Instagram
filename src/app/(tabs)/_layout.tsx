import { Redirect, Tabs } from "expo-router";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useAuth } from "~/src/providers/AuthProvider";
import NotificationProvider from "~/src/providers/NotificationProvider";
import Header from "~/src/components/Header";

export default function TabsLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/(auth)" />;
  }
  return (
    <NotificationProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerTitle: (props) => <Header />,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={26} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            headerTitle: "Search",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="search" size={26} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="new"
          options={{
            headerTitle: "Create post",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="plus-square-o" size={26} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            headerTitle: "Favorite",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="heart-o" size={26} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerTitle: "Profile",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={26} color={color} />
            ),
          }}
        />
      </Tabs>
    </NotificationProvider>
  );
}
