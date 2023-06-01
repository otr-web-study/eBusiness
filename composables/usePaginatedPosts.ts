import { POST_PER_PAGE } from "~/constants/constants";
import type { Post } from "~/types/Post";

export const usePaginatedPosts = (posts: Ref<Post[] | null>) => {
  const { page } = useRoute().query || "";

  const currentPage = useState("currentPage", () => 1);
  currentPage.value = parseInt(page as string) || 1;

  const totalPages = computed(() =>
    Math.ceil((posts.value || []).length / POST_PER_PAGE || 1)
  );

  const paginatedPosts = computed(() =>
    (posts.value || []).slice(
      POST_PER_PAGE * currentPage.value - POST_PER_PAGE,
      POST_PER_PAGE * currentPage.value
    )
  );

  const setPage = (val: number) => {
    currentPage.value = val;
  };

  const pageRange = ref<number[]>([]);

  watchEffect(() => {
    if (currentPage.value > totalPages.value) {
      return;
    }

    const startRange = Math.max(1, currentPage.value - 2);
    const endRange = Math.min(currentPage.value + 2, totalPages.value);

    pageRange.value = [...Array(endRange - startRange + 1).keys()].map(
      (n) => n + startRange
    );

    window.scrollTo(0, 0);
  });

  return { page: currentPage, totalPages, pageRange, paginatedPosts, setPage };
};
