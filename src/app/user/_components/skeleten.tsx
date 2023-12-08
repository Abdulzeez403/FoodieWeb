import { Skeleton } from 'antd';

interface IProps {
    active: boolean
}

const SkeletenComponent = ({ active }: IProps) => {
    return (
        <>
            <Skeleton.Avatar active={active} size="large" shape="circle" />
            <Skeleton.Node active={active}></Skeleton.Node>
        </>

    )

}

export default SkeletenComponent;