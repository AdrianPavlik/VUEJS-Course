<script>
export const CustomColor = (el, binding) => {
     console.log(el)
     console.log(binding)
     const defaultColorA = "grey";
     const color = binding.value || defaultColorA;
     el.style.backgroundColor = color;
}

export default CustomColor;
</script>
