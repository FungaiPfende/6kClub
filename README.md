# TODO:

1. Fix the Stories image bug. ✅

2. Set up bottom tabs and stack navigation. ✅
  - Figure out how to combine those 2 types of navigation together.
    - [Resource 1](https://reactnavigation.org/docs/tab-based-navigation/#a-stack-navigator-for-each-tab)
    - [Resource 2](https://reactnavigation.org/docs/nesting-navigators/)

3. Use [`expo-av`](https://docs.expo.dev/versions/latest/sdk/video/#usage) to display a video for the live webinar component. ❌

4. Develop the `Profile` screen from the sketch that I drew.
  - Use the [JSON Placeholder API](https://jsonplaceholder.typicode.com/) to render the `ProjectsList` component and `ProjectDetails` screen.

# Learning Journey

## 18 Aug, 2022

1. The React Navigation [`useNavigation`](https://reactnavigation.org/docs/use-navigation) hook is used to give a component access to the `navigation` object without having to pass it down from the parent to the child as props. This helps when dealing with deeply nested components that need access to `navigation`.
   I used this hook when I needed the user Profile icon to navigate to the `Profile` screen. My previous implementation made me pass down the `navigation` prop down to all screens. After using the `useNavigation` hook, I only had to implement the navigation functionality in the `Header` component only and not every screen that was rendering `Header`.

2. Using `Stack` and `Tab` navigators together.
   I wanted to make sure that the main screens that render the `Header` component could link to the `Profile` component as a `Stack`. I figured out that to do that, I needed to create stacks for all the screens and then render those stacks in the `Tab` navigator.
   A downside to this method is that the `Profile` screen renders the tab bar. This isn't the best UX that I want for the app, so I'll consider [how to hide the tab bar](https://reactnavigation.org/docs/hiding-tabbar-in-screens) in the `Profile` screen.

3. App Navigation structuring.
   I found out that the navigation I want to use is a bit complex, so I decided to abstract all of that logic to a separate `navigation` folder. I added all the `Stack` navigators into their own individual files and exported them into the global `AppNavigator` file, to centralise the navigation.
   I then used that `AppNavigator` and rendered it in the root `App.js` file, making it significantly cleaner than it was before.
