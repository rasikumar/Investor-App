import { ApiRoute } from "@/helper/service"
import { RequestApi } from "@/helper/utils"
import { useQuery } from "@tanstack/react-query"

const User = () => {
    const USER_QUERY_KEY = "user"
    const {data: userData, isError:isUserDataError,isLoading: isUserDataLoading, error: isUserError} = useQuery({
        queryKey : [
            USER_QUERY_KEY,
        ],
        queryFn: () =>
            RequestApi('get', ApiRoute.USER_DASHBOARD ),
        staleTime: 60 * 1000
    });

    return{
        userData,   
        isUserDataError,
        isUserDataLoading,
        isUserError
    }
}
export default User;