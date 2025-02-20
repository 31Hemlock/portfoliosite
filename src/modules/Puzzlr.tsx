import { CoreTabContentData, TabContentData } from '@/types/TabContentTypes'
import { ContentCard } from '@/components/ContentCard'
import {
  mainHeaderClasses,
  divider,
  paragraphClasses,
  leftMainHeaderClasses,
} from '@/types/TabContentTypes'
import { LinkWrapper } from '@/components/LinkWrapper'
import { SB } from '@/components/utils/SB'
import { FunctionWrapper } from '@/components/FunctionWrapper'
import { ObjectWrapper } from '@/components/ObjectWrapper'
import { CodeLink } from '@/data/CodeLink'
import puzzlrVideo from '../assets/vid/puzzlr.mp4'
import puzzlrLQVideo from '../assets/vid/lq/puzzlr.mp4'
import puzzlrPoster from '../assets/vid/poster/puzzlr.webp'

export const PuzzlrCoreTabContent: CoreTabContentData = {
  media: {
    id: 'puzzlr',
    type: 'video',
    src: puzzlrVideo,
    lqsrc: puzzlrLQVideo,
    poster: puzzlrPoster,
    alt: 'Puzzlr',
    dims: { h: 1920, w: 1080 },
  },
  title: 'Puzzlr',
  subtitle: 'A 3D tabletop puzzle game.',
  link: 'tabletop-puzzle-game',
}

export const PuzzlrTabContent: TabContentData = {
  ...PuzzlrCoreTabContent,
  content: (
    <>
      <ContentCard>
        <p className={`${mainHeaderClasses}`}>
          {PuzzlrCoreTabContent.subtitle}
        </p>
        {divider}
        <p className={`${paragraphClasses}`}>
          <LinkWrapper url="https://31hemlock.github.io/Puzzlr" text="Puzzlr" />{' '}
          is an immersive 3D puzzle experience created with{' '}
          <LinkWrapper url="https://threejs.org/" text="Three.js" />. Users can
          generate a puzzle from any image by selecting one from the menu,
          uploading an image from their device, or providing an image URL, and
          then solve it in a 3D environment.
        </p>
        <p className={`${leftMainHeaderClasses}`}>
          Algorithmic Puzzle Generation
        </p>
        {divider}
        <p className={`${paragraphClasses}`}>
          Each puzzle takes two inputs: an image and an{' '}
          <LinkWrapper
            text="SVG file"
            url="https://en.wikipedia.org/wiki/SVG"
          />
          . I manually created an SVG file for each puzzle with predefined
          boundaries (like the{' '}
          <LinkWrapper
            url={
              CodeLink +
              'Puzzlr/blob/main/static/geography/svg/northAmerica.svg'
            }
            text="United States map"
          />
          ) to keep track of the boundaries between the pieces. Other puzzles
          use an algorithm to dynamically generate a unique SVG file for each
          game.
        </p>
        <p className={`$paragraphClasses}`}>
          The first algorithm I developed is called{' '}
          <LinkWrapper
            url={CodeLink + 'Puzzlr/blob/main/src/js/PuzzleSVG.js'}
            text="Divided Squares"
          />
          . It first creates a plane from an image, and uses the dimensions of
          that plane to create a set of equally-sized squares. With those
          boundaries, the algorithm creates a randomly curved line which begins
          at the bottom left and ends at the top right of each square. This line
          is then added to both sections of the square, which are added to an
          SVG file to represent the cuts in our newly generated puzzle.
        </p>
        <p className={`${paragraphClasses}`}>
          The second algorithm, "The Voronoi", generates a{' '}
          <LinkWrapper
            url="https://en.wikipedia.org/wiki/Voronoi_diagram"
            text="Voronoi diagram"
          />{' '}
          using{' '}
          <LinkWrapper
            url="https://github.com/gorhill/Javascript-Voronoi"
            text="gorhill's"
          />{' '}
          Javascript implementation. I then convert this diagram into an SVG
          file for use in my application.
        </p>
        <p className={`${leftMainHeaderClasses}`}>Puzzle Pairing Logic</p>
        {divider}
        <p className={`${paragraphClasses}`}>
          Given that my puzzle has no visible boundaries, one of the biggest
          challenges was to combine pieces and groups of pieces together when
          they are dropped near one another. To do so, I needed to track the
          location of each vertex within each puzzle piece, or group of puzzle
          pieces, in my scene. I also needed to recall the piece's original
          location and vertex positions to combine it with nearby pieces and
          create a "snap" effect when a piece was close enough to a matching
          piece.
        </p>
        <p className={`${paragraphClasses}`}>
          To facilitate this, I created a{' '}
          <ObjectWrapper
            url={CodeLink + 'Puzzlr/blob/main/src/js/Piece.js'}
            text="Piece"
          />{' '}
          and{' '}
          <ObjectWrapper
            url={CodeLink + 'Puzzlr/blob/main/src/js/PieceGroup.js'}
            text="PieceGroup"
          />{' '}
          object in Javascript which are each extended from Three.js objects.
          Whenever one of these objects is dropped, it first calculates its new
          position with a function called{' '}
          <FunctionWrapper
            url={`${CodeLink}Puzzlr/blob/main/src/js/Piece.js#L136`}
            text="moved"
          />
          . Since Three.js only tracks the center of a piece's{' '}
          <ObjectWrapper
            url="https://threejs.org/docs/#api/en/objects/Mesh"
            text="mesh"
          />
          , I created a function called{' '}
          <FunctionWrapper
            url={`${CodeLink}Puzzlr/blob/main/src/js/Piece.js#L227`}
            text="setCurVerts"
          />
          , which finds the real location of each vertex in the piece or group
          of pieces, regardless of rotation angle. Finally, we can call function{' '}
          <FunctionWrapper
            url={`${CodeLink}/Puzzlr/blob/main/src/js/Piece.js#L258`}
            text="checkFormGroup"
          />
          , which compares the location of the dropped piece's vertices to the
          others in the scene, and if a vertex of a dropped piece matches one of
          a nearby piece, those pieces are destroyed and remade into a{' '}
          <ObjectWrapper text="PieceGroup" />. This continues until we only have
          one <ObjectWrapper text="PieceGroup" /> left and the puzzle is
          complete.
        </p>
        <p className={`${leftMainHeaderClasses}`}>
          Object-Oriented Programming (OOP)
        </p>
        {divider}
        <p className={`${paragraphClasses}`}>
          I chose <SB>Object-Oriented Programming (OOP)</SB> for this project to
          easily keep track of and manipulate all objects in my scene. OOP makes
          it simple to reference all objects in my scene when I need to check
          for nearby matches. It also makes it simple to create and destroy
          individual puzzles. In the future, I could extend the application to
          allow for multiple puzzles to be solved at once due to the structure
          of the code.
        </p>
        <p className={`${leftMainHeaderClasses}`}>Asset Creation</p>
        {divider}
        <p className={`${paragraphClasses}`}>
          To create the 3D assets for this project, I learned how to model and
          color assets in{' '}
          <LinkWrapper url="https://www.blender.org/" text="Blender" />. Behind
          the window is a static image and a{' '}
          <LinkWrapper
            url="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API"
            text="WebGL snow effect"
          />
          , all custom-made for this scene.
        </p>
        <p className={`${paragraphClasses}`}>
          I aimed to create a contrast between the snowy environment outside and
          the cozy environment inside. In hindsight, I think I could have done a
          better job creating the color palette for the scene, as the effect
          isn't entirely as I would like. If I decide to revisit this project in
          the future, I may create some kind of zero-gravity spaceship scene.
        </p>
        <p className={`${paragraphClasses}`}>
          I created the sounds for this project in{' '}
          <LinkWrapper url="https://www.ableton.com/en/" text="Ableton" />. One
          sound exists for dropping a piece, and several sounds exist for
          pairing pieces together. When a piece group is created or increases in
          size, a sound is chosen based on the portion of the puzzle that has
          just been formed. The sounds are designed to become larger and fuller
          as more pieces are grouped, creating a sense of progression.
        </p>
      </ContentCard>
      <ContentCard>
        <p className={`${leftMainHeaderClasses}`}>Source Code</p>
        {divider}
        <p className={`${paragraphClasses}`}>
          The source code is available{' '}
          <LinkWrapper url={`${CodeLink}puzzlr`} text="here" />.
        </p>
      </ContentCard>
    </>
  ),
}
