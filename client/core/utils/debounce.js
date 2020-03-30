/**
 * Задержка вызова
 * @param {function} callback передаваемый коллбэк
 * @param {number} delay задержка в мс
 * @category Utils
 */
const debounce = (callback, delay) => {
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        callback();
    }, delay);
};

export default debounce;
