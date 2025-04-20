import { Card, HStack, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react"

export default function SkeletonCard() {
    return (
        <Card.Root padding="2.785rem ">
            <HStack flexDirection="column" alignItems="flex-start" width="15.5rem" height="8rem">
                <Stack >
                    <SkeletonCircle size="12" />
                    <Skeleton height="6" />
                </Stack>
                    <Skeleton height="5" width="40%" />
                    <Skeleton height="9" width="60%"/>
            </HStack>
        </Card.Root>
    )
}