library(tidyverse)
library(lme4)
library(languageR)

source("helpers.r")

this.dir <- dirname(rstudioapi::getSourceEditorContext()$path)
setwd(this.dir)

# color-blind-friendly palette
#cbPalette <- c("#E69F00", "#56B4E9", "#009E73", "#F0E442", "#0072B2", "#D55E00", "#CC79A7") 

# load the main data
d <- read_csv("../../../data/02_arithmetic_priming/final_experiment-trials.csv")
#View(d)

filtered <- filter(d, as.numeric(correct_answer) == math_answer, !(label == "U") )

#filtered <- select(filtered, )
#view(filtered)

prop.table(table(filtered$label))
prop.table(table(filtered$prime_condition))


filtered$label <- ifelse(filtered$label == "L", 1, 0)
filtered$workerid <- paste(as.character(filtered$workerid),"a", sep = "")
view(filtered)
#summary(filtered)

n <- glm(label ~ prime_condition , data=filtered, family = "binomial")
summary(n)

m <- glmer(label ~ prime_condition + (1|target) + (1 + prime_condition|workerid), data=filtered, family = "binomial")
summary(m)
#vif.mer(m)
 
agr = filtered %>%
  group_by(prime_condition) %>%
  summarize(proportion = mean(label), CI.Low = ci.low(label), CI.High = ci.high(label)) %>%
  mutate(YMin = proportion - CI.Low, YMax = proportion + CI.High)

ggplot(agr, aes(x=prime_condition,y=proportion, fill = prime_condition)) +
  geom_bar(stat="identity",color="black") +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),width=.25) + 
  xlab("Prime") + ylab("Proportion of Low-Attachment Completions") + 
  scale_fill_manual(values = c(BL = "#C3C3C3", HA = "#7F7F7F", LA = "#FFFFFF")) +
  theme(panel.background = element_rect(fill="#FFFFFF"), axis.line = element_line()) +
  scale_y_continuous(limits = c(0, 1))
  