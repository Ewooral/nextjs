// export const  changeInputType = () => {
//     const input = document.getElementById('input') as HTMLInputElement;
//     const type = input.type;
//     input.type = type === 'text' ? 'password' : 'text';
//     input.focus();
//     input.setSelectionRange(input.value.length, input.value.length);
// }

export function changeInputType() {
    const input = document.getElementById('input') as HTMLInputElement;
    return new Promise((resolve) => {
        const type = input.type;
        console.log('type', type)
    });
  }