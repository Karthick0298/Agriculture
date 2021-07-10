import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root1: {
    width: "100%",
    "& .MuiTypography-body1": {
      color: "#494646",
    },
  },
  root2: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
  },
  wrapper: {
    display: "flex",
    gap: 40,
  },
  content1: {
    flex: 6,
  },
  content2: {
    flex: 6,
  },
  container: {
    display: "flex",
    alignItems: "center",
    paddingBlock: 40,
    justifyContent: "center",
    "& .MuiTypography-h1": {
      fontSize: 42,
      color: "#00393c",
      fontFamily: "monospace",
    },
  },
}));

export default function Questions() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        <Typography variant="h1">Frequently Asked Questions</Typography>
      </Box>
      <div className={classes.wrapper}>
        <div className={classes.content1}>
          <div className={classes.root1}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  What is SRI ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The SRI is an alternative to the traditional way of flooded
                  rice cultivation and is showing promise in addressing the
                  problems of water scarcity, high energy usage and
                  environmental degradation. SRI involves few major components
                  viz., using younger seedlings, square planting, irrigation by
                  alternate wetting and drying, weeding though cono/rotary
                  weeder, LCC based N management.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  What is Organic farming ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Organic farming is a system, which avoids or largely excludes
                  the use of synthetic inputs (such as fertilizers, pesticides,
                  hormones, feed additives etc.,) and to the maximum extent
                  feasible relies upon crop rotations, crop residues, animal
                  manures, off-farm organic waste, mineral grade rock additives
                  and biological system of nutrient mobilization and plant
                  protection.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  What is green leaf manuring?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Green leaf manuring refers to turning into the soil green
                  leaves and tender green twigs collected from shrubs and trees
                  grown on bund, wasteland and nearby forest areas. Glyricidia,
                  Pongamia, Leucina are common green leaf manuring crops.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  What is compost?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Compost is well decomposed organic wastes like plant residues,
                  animal dung, urine earth from cattle sheds and waste fodder
                  etc.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  How to care of newborn calf?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To feed the Colostrum for newborn calf within 30 minutes of
                  birth. Quantity of colostrum feeding is 1/10th of calf body
                  weight, up to maximum of 2-2.5 litre per day for three days.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  What is the comfort temperature for livestock?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  For better production the comfort temperature for livestock is
                  65-75oF.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  How to control the pest leaf folder in paddy by biological
                  methods?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To manage leaf folder in Paddy release Trichogramma Chilonis @
                  5 cc/ha (1,00,000 nos.) at weekly intervals, 3 times from 42
                  days onwards. Application of botanicals especially NSKE @ 5%.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className={classes.content2}>
          <div className={classes.root2}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Mention the principles & practices of SRI ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li>Raise the mat nursery for plant establishment</li>
                    <li>Seed rate 7-8kg/ha for single seedling per hill</li>
                    <li>
                      Transplant young seedlings aged 15 days having 2-3 leaves
                      with seed attached to the root
                    </li>
                    <li>Square planting of 22.5 x 22.5 cm (9 x 9 inch)</li>
                    <li>
                      Use leaf colour chart for the determining the time for top
                      dressing N fertilizer
                    </li>
                    <li>
                      Irrigation only to moist the soil in the early period of
                      10 days. Restoring irrigation to a maximum depth of 2.5cm
                      after development of hairline cracks in the soil until
                      panicle initiation
                    </li>
                    <li>
                      Moving the Rotary weeder / Conoweeder with forward and
                      backward motion to bury the weeds and as well to aerate
                      the soil at 7-10 days interval from 10-15 days after
                      planting on either direction of the rows and column
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  What are the benefits of Organic farming ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ol>
                    <li>
                      It helps in maintaining environment health by reducing the
                      level of pollution
                    </li>
                    <li>
                      It reduces human and animal health hazards by reducing the
                      level of residues in the product
                    </li>
                    <li>
                      It helps in keeping agricultural production at a higher
                      level and makes it sustainable
                    </li>
                    <li>
                      It reduces the cost of agricultural production and also
                      improves the soil health
                    </li>
                    <li>
                      It ensures optimum utilization of natural resources for
                      short-term benefit and helps in conserving them for future
                      generation
                    </li>
                    <li>
                      It ensures optimum utilization of natural resources for
                      short-term benefit and helps in conserving them for future
                      generation
                    </li>
                    <li>
                      It improves the soil physical properties such as
                      granulation, and good tilth, good aeration, easy root
                      penetration and improves water-holding capacity
                    </li>
                    <li>
                      It improves the soil's chemical properties such as supply
                      and retention of soil nutrients, and promotes favorable
                      chemical reactions
                    </li>
                  </ol>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  What is green manuring and mention some of the green manure
                  crops?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Green manuring can be defined as practice of ploughing or
                  turning into the soil undecomposed green plant tissues for the
                  purpose of improving physical structure as well as fertility
                  of the soil. Sunhemp, Sesbania, Crotalaria, Pillipesara,
                  Cowpea etc are good for green manuring.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  How compost is prepared?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Compost making is the process of decomposing organic wastes in
                  a pit. Site for compost making is selected should be at a high
                  level and water should not pond during monsoon season. Pit
                  should be of 3' depth and 6' to 8' width. Length may be of any
                  convenient size. The process is as follows :
                  <ol>
                    <li>Make slurry of the cattle dung with water</li>
                    <li>
                      Prepare 6" layer of organic wastes-plant residues,
                      sweepings from the cattle shed,waste fodder, dried plants
                      stalks and leaves etc. and sprinkle water to just moisten
                      it. (Over watering should be avoided)
                    </li>
                    <li>
                      Cover with the layer with urine earth and cattle dung
                      slurry
                    </li>
                    <li>
                      Add 5 to 10 kg of super phosphate for every 10 tons of
                      organic wastes
                    </li>
                    <li>
                      Repeat the process of putting such layers till the pit is
                      full
                    </li>
                    <li>
                      Close the pit with urine earth, waste fodder and then heap
                      the soil till it gets convex shape (about 1 to 1.5' above
                      the ground) so that the rainwater rolls away
                    </li>
                    <li>
                      After six months compost is ready to apply to the fields
                    </li>
                  </ol>
                  The pit can be filled up if sufficient organic wastes are
                  available. Otherwise a temporary partition can be made in the
                  pit with bamboos or stalks and the pit can be filled up over
                  time filling each partitioned area as and when the material is
                  available for composting.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Mention the medication schedule for young chicks ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Medication Schedule for young chicks, 1st & 2nd day -
                  Electrolytes,vitamins; 3rd to 7th day - Antibiotics; 17th to
                  21st day - Coccidiostat.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  How to control the monocot weeds in banana crop?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To control monocot weeds in banana spray systemic herbicide
                  Glyphosate 10ml + 20g of ammonium sulphate per litre of water
                  at 3-4 leaf state of weeds.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
