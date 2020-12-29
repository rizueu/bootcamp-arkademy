/**
 * Function deteksiPalindrom()
 * @params text: string
 * @return Validation
 */
const deteksiPalindrom = (text) => {
    // Validation
    if (text.length <= 1) return "Tidak boleh hanya memasukan 1 huruf!";

    let reversedText = '';
    for (let index = text.length - 1; index >= 0; index--){
        reversedText += text[index];
    }

    return reversedText.toLowerCase() === text.toLowerCase() ? `"${text}"\nMerupakan text Palindrom` : `"${text}"\nMerupakan bukan text Palindrom`
}

console.log(deteksiPalindrom('saya'));