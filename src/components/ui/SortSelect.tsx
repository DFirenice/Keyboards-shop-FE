import { Select, SelectGroup, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@app-ui/select";
const SortSelect = () => {
    return (
        <Select>
            <SelectTrigger>
                <SelectValue placeholder="Sort by"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="lowest">Lowest Price</SelectItem>
                    <SelectItem value="highest">Highest Price</SelectItem>
                    <SelectItem value="popular">Popular</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default SortSelect