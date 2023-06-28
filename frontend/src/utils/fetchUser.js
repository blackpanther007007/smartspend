export const fetchUser = () => {
    const userInfo = localStorage.getItem('profile') !== 'undefined' ? JSON.parse(localStorage.getItem('profile')) : localStorage.clear();
    return userInfo;
}