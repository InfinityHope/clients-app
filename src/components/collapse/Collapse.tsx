import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box
} from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'

interface ICollapse {
	title: string
}

const Collapse: FC<PropsWithChildren<ICollapse>> = ({ title, children }) => {
	return (
		<Accordion defaultIndex={[0]} allowMultiple>
			<AccordionItem border={'none'}>
				<h2>
					<AccordionButton>
						<AccordionIcon />
						<Box as='span' ml={'.5em'}>
							{title}
						</Box>
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>{children}</AccordionPanel>
			</AccordionItem>
		</Accordion>
	)
}

export default Collapse
