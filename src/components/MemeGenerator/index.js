import {Component} from 'react'

import {
  LeftContainer,
  MemeHeading,
  FormContainer,
  Label,
  Input,
  Select,
  GenerateButton,
  RightContainer,
  BgImageContainer,
  Content,
  MainContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    option: fontSizesOptionsList[0].optionId,
    showImage: false,
  }

  onChangingOption = event => {
    this.setState({option: event.target.value})
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangingTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangingBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText} = this.state
    if (imageUrl !== '' && topText !== '' && bottomText !== '') {
      this.setState({showImage: true})
    }
  }

  render() {
    const {imageUrl, topText, bottomText, option, showImage} = this.state
    const OptionValue = parseInt(option)

    return (
      <MainContainer>
        <LeftContainer>
          <MemeHeading>Meme Generator</MemeHeading>
          <FormContainer onSubmit={this.onSubmitForm}>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              id="imageUrl"
              type="text"
              onChange={this.onChangeImageUrl}
              value={imageUrl}
            />
            <Label htmlFor="topText">Top Text</Label>
            <Input
              id="topText"
              type="text"
              onChange={this.onChangingTopText}
              value={topText}
            />
            <Label htmlFor="bottomText">Bottom Text</Label>
            <Input
              id="bottomText"
              type="text"
              onChange={this.onChangingBottomText}
              value={bottomText}
            />
            <Label htmlFor="font-size">Font Size</Label>
            <Select
              id="font-size"
              onChange={this.onChangingOption}
              value={option}
            >
              {fontSizesOptionsList.map(Item => (
                <option key={Item.optionId} value={Item.optionId}>
                  {Item.displayText}
                </option>
              ))}
            </Select>
            <GenerateButton type="submit">Generate</GenerateButton>
          </FormContainer>
        </LeftContainer>
        <RightContainer>
          {showImage && (
            <BgImageContainer imageUrl={imageUrl} data-testid="meme">
              <Content fontSize={OptionValue}>{topText}</Content>
              <Content fontSize={OptionValue}>{bottomText}</Content>
            </BgImageContainer>
          )}
        </RightContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
